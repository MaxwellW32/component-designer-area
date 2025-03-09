import { z } from "zod";

//category data type start copy here
const htmlAttributesSchema = z.object({
    style: z.record(z.string()).optional(),
    className: z.string().optional(),
    id: z.string().optional(),
});
export type htmlAttributesType = z.infer<typeof htmlAttributesSchema>





const navSubMenuItem = z.object({
    label: z.string(),
    link: z.string(),
})
const navMenuItem = z.object({
    label: z.string(),
    link: z.string(),
    subMenu: z.array(navSubMenuItem).optional()
})
export const navBarsSchema = z.object({
    category: z.literal("navbars"),
    mainElProps: htmlAttributesSchema,
    styleId: z.string(),

    menu: z.array(navMenuItem),
})
export type navBarsType = z.infer<typeof navBarsSchema>





export const herosSchema = z.object({
    category: z.literal("heros"),
    mainElProps: htmlAttributesSchema,
    styleId: z.string(),
})
export type herosType = z.infer<typeof herosSchema>





export const containersSchema = z.object({
    category: z.literal("containers"),
    mainElProps: htmlAttributesSchema,
    styleId: z.string(),

    children: z.any(),
})
export type containersType = z.infer<typeof containersSchema>





export const textElementsSchema = z.object({
    category: z.literal("textElements"),
    mainElProps: htmlAttributesSchema,
    styleId: z.string(),
})
export type textElementsType = z.infer<typeof textElementsSchema>





export const templateDataSchema = z.union([navBarsSchema, herosSchema, containersSchema, textElementsSchema])
export type templateDataType = z.infer<typeof templateDataSchema>
//category data type end copy here




