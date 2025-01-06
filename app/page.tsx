import Nav from "@/components/nav/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav data={{
        category: "navbars",
        menu: [
          {
            label: "menu item 1",
            link: "/",
            subMenu: [
              {
                label: "sub menu item 1",
                link: "/",
              }
            ]
          },
          {
            label: "menu item 2",
            link: "/",
          },
        ]
      }} />
    </>
  );
}
