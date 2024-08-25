import { z } from "zod";

const accept = z.boolean().refine((data) => data === true);

const email = z
  .string({ required_error: "Це поле є обов`язковим." })
  .min(1, "Це поле є обов`язковим.")
  .max(30, "максимальна кількість символів 30")
  .email("Неправильний формат електронної пошти");
const password = z
  .string()
  .min(1, "Це поле є обов`язковим.")
  .regex(/^(?!.*\s).+$/, "пробіли на початку, всередині і в кінці заборонені")
  .regex(/^(?=.*[a-zа-я])/, "мінімум одна мала літера")
  .regex(/^(?=.*[A-ZА-Я])/, "мінімум одна велика літера")
  .regex(/^(?=.*[0-9])/, "мінімум одна цифра")
  .min(8, "мінімальна кількість символів 8")
  .max(12, "максимальна кількість символів 12");

export const loginSchema = z.object({
  email: email,
  password: password,
});
export type LoginValues = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  email: email,
});
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export const subscribeSchema = z.object({
  email: email,
});
export type SubscribeValues = z.infer<typeof resetPasswordSchema>;

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(1, "Це поле є обов`язковим.")
    .regex(/^[A-ZА-ЯІЇЄ]/, "Ім`я має починатись з великої літери")
    .min(4, "мінімум 4 символи")
    .max(20, "максимум 20 символів"),
  lastName: z
    .string()
    .min(1, "Це поле є обов`язковим.")
    .regex(/^[A-ZА-ЯІЇЄ]/, "Прізвище має починатись з великої літери")
    .min(4, "мінімум 4 символи")
    .max(20, "максимум 20 символів"),
  email: email,
  password: password,
  accept: accept,
  privacy: accept,
});

export type RegisterValues = z.infer<typeof registerSchema>;
