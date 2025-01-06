import { z } from "zod";

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
    menu: z.array(navMenuItem),
})
export type navBarsType = z.infer<typeof navBarsSchema>

