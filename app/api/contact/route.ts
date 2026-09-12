import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  contact?: unknown;
  task?: unknown;
};

const limits = {
  name: 100,
  company: 160,
  contact: 200,
  task: 3000,
} as const;

function getText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return NextResponse.json({ error: 'Некорректный запрос.' }, { status: 400 });
  }

  if (
    !requestBody ||
    typeof requestBody !== 'object' ||
    Array.isArray(requestBody)
  ) {
    return NextResponse.json({ error: 'Некорректный запрос.' }, { status: 400 });
  }

  const payload = requestBody as ContactPayload;

  const name = getText(payload.name);
  const company = getText(payload.company);
  const contact = getText(payload.contact);
  const task = getText(payload.task);

  if (!name || !contact || !task) {
    return NextResponse.json(
      { error: 'Заполните имя, контакт и описание задачи.' },
      { status: 400 },
    );
  }

  if (
    name.length > limits.name ||
    company.length > limits.company ||
    contact.length > limits.contact ||
    task.length > limits.task
  ) {
    return NextResponse.json(
      { error: 'Одно из полей превышает допустимую длину.' },
      { status: 400 },
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram contact form environment is not configured.');
    return NextResponse.json(
      { error: 'Сервис отправки временно недоступен.' },
      { status: 500 },
    );
  }

  const message = [
    'Новая заявка с сайта Русинфотек',
    '',
    `Имя: ${name}`,
    `Компания: ${company || '—'}`,
    `Контакт: ${contact}`,
    '',
    'Задача:',
    task,
  ].join('\n');

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      },
    );
    const telegramResult = (await telegramResponse.json()) as { ok?: boolean };

    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error(
        `Telegram contact form request failed with status ${telegramResponse.status}.`,
      );
      return NextResponse.json(
        { error: 'Не удалось отправить заявку.' },
        { status: 502 },
      );
    }
  } catch {
    console.error('Telegram contact form request failed.');
    return NextResponse.json(
      { error: 'Не удалось отправить заявку.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
