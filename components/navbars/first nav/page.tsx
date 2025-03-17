"use client";
import { navBarsDataType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import "@/app/globals.css";

//className={`${data.styleId}`}
export default function Nav({ data }: { data: navBarsDataType }) {

    return (
        <>
            <div className={`topContacts${data.styleId}`}>
                <div className={`contactInfoCont${data.styleId}`}>
                    {data.contactInfo.map((eachContactInfo, eachContactInfoIndex) => {
                        return (
                            <Link key={eachContactInfoIndex} href={eachContactInfo.link !== null ? eachContactInfo.link.url : "#"} className={`eachContact${data.styleId}`}>
                                {eachContactInfo.image !== null && (
                                    <Image
                                        src={eachContactInfo.image.src}
                                        alt={eachContactInfo.image.alt}
                                        width={eachContactInfo.image.size.type === "noFill" ? eachContactInfo.image.size.width : undefined}
                                        height={eachContactInfo.image.size.type === "noFill" ? eachContactInfo.image.size.height : undefined}
                                        fill={eachContactInfo.image.size.type === "fill" ? true : undefined}
                                        priority={eachContactInfo.image.priority !== null ? eachContactInfo.image.priority : undefined}
                                    />
                                )}

                                <p>{eachContactInfo.title}</p>
                            </Link>
                        )
                    })}
                </div>

                <div className={`socialsCont${data.styleId}`}>
                    {data.socialMedia.map((eachSocial, eachSocialIndex) => {
                        return (
                            <Link key={eachSocialIndex} href={eachSocial.link !== null ? eachSocial.link.url : "#"} className={`eachSocial${data.styleId}`}>
                                {eachSocial.title !== null && (
                                    <p>{eachSocial.title}</p>
                                )}

                                {eachSocial.image !== null && (
                                    <Image
                                        src={eachSocial.image.src}
                                        alt={eachSocial.image.alt}
                                        width={eachSocial.image.size.type === "noFill" ? eachSocial.image.size.width : undefined}
                                        height={eachSocial.image.size.type === "noFill" ? eachSocial.image.size.height : undefined}
                                        fill={eachSocial.image.size.type === "fill" ? true : undefined}
                                        priority={eachSocial.image.priority !== null ? eachSocial.image.priority : undefined}
                                    />
                                )}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <nav {...data.mainElProps} className={`nav${data.styleId} ${data.mainElProps?.className ?? ""}`}>
                <div></div>
            </nav>
        </>
    );
}


// {/* <nav {...data.mainElProps} className={`nav${data.styleId} ${data.mainElProps?.className ?? ""}`}>
// {/* Logo Section */}
// <div className={`navLogoContainer${data.styleId}`}>
//     {data.logos.map((logo, index) => (
//         <Link key={index} href={logo.link?.url || "#"} className={`navLogoLink${data.styleId}`}>
//             <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.size.type === "noFill" ? logo.size.width : undefined}
//                 height={logo.size.type === "noFill" ? logo.size.height : undefined}
//                 fill={logo.size.type === "fill"}
//                 priority={logo.priority !== null ? logo.priority : undefined}
//                 className={`navLogo${data.styleId}`}
//             />
//         </Link>
//     ))}
// </div>

// {/* Hamburger Menu (Mobile) */}
// <button className={`menuToggle${data.styleId}`} onClick={() => setMenuOpen(!menuOpen)}>
//     ☰
// </button>

// {/* Navigation Links */}
// <ul className={`navMenu${data.styleId} ${menuOpen ? `navMenuOpen${data.styleId}` : ""}`}>
//     {data.menu.map((menuItem, menuItemIndex) => (
//         <li key={menuItemIndex} className={`navItem${data.styleId}`}>
//             <Link href={menuItem.link.url} target={menuItem.link.target !== null ? menuItem.link.target : undefined} className={`navLink${data.styleId}`}>
//                 {menuItem.title}
//             </Link>

//             {menuItem.subMenu.length > 0 && (
//                 <ul className={`navSubmenu${data.styleId}`}>
//                     {menuItem.subMenu.map((subMenuItem, subMenuItemIndex) => (
//                         <li key={subMenuItemIndex} className={`submenuItem${data.styleId}`}>
//                             <Link href={subMenuItem.link.url} className={`submenuLink${data.styleId}`}>
//                                 {subMenuItem.title}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </li>
//     ))}
// </ul>

// {/* Contact & Social Media */}
// <div className={`navExtras${data.styleId}`}>
//     <div className={`navContactContainer${data.styleId}`}>
//         {data.contactInfo.map((contact, index) => (
//             <Link key={index} href={contact.link?.url || "#"} className={`navContactItem${data.styleId}`}>
//                 {contact.image && (
//                     <Image
//                         src={contact.image.src}
//                         alt={contact.image.alt}
//                         width={contact.image.size.type === "noFill" ? contact.image.size.width : undefined}
//                         height={contact.image.size.type === "noFill" ? contact.image.size.height : undefined}
//                         fill={contact.image.size.type === "fill"}
//                         className={`contactIcon${data.styleId}`}
//                     />
//                 )}
//                 <span>{contact.title}</span>
//             </Link>
//         ))}
//     </div>

//     <div className={`navSocialMediaContainer${data.styleId}`}>
//         {data.socialMedia.map((social, index) => (
//             <Link key={index} href={social.link.url} className={`navSocialItem${data.styleId}`}>
//                 <Image
//                     src={social.image.src}
//                     alt={social.image.alt}
//                     width={social.image.size.type === "noFill" ? social.image.size.width : undefined}
//                     height={social.image.size.type === "noFill" ? social.image.size.height : undefined}
//                     fill={social.image.size.type === "fill"}
//                     className={`socialIcon${data.styleId}`}
//                 />
//             </Link>
//         ))}
//     </div>
// </div>
// </nav> */}
