import Nav from "@/components/navbars/first nav/page";


export default function Home() {
  return (
    <>
      <Nav
        data={{
          "category": "navbars",
          "mainElProps": {},
          "menu": [
            {
              title: "home",
              link: {
                title: null,
                url: "/",
                target: null,
              },
              subMenu: [
                {
                  title: "sub home",
                  link: {
                    title: null,
                    url: "/subHome",
                    target: null,
                  },
                  subMenu: [],
                }
              ]
            },
            {
              title: "about",
              link: {
                title: null,
                url: "about",
                target: null,
              },
              subMenu: [],
            }
          ],
          "styleId": "",
          logos: [
            {
              src: "https://images.pexels.com/photos/4452510/pexels-photo-4452510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              alt: "logo",
              priority: true,
              size: {
                type: "noFill",
                width: 300,
                height: 300,
              },
              link: {
                title: null,
                url: "/",
                target: null,
              }
            }
          ],
          children: undefined,
          contactInfo: [
            {
              title: "example@hotmail.com",
              image: {
                src: "https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png",
                alt: "email icon",
                priority: null,
                size: {
                  type: "noFill",
                  width: 13,
                  height: 13,
                },
                link: null
              },
              link: null,
            },
            {
              title: "Kurarpar, Dharnibari, Ulipur 5620",
              image: {
                src: "https://cdn-icons-png.flaticon.com/512/171/171322.png",
                alt: "address icon",
                priority: null,
                size: {
                  type: "noFill",
                  width: 13,
                  height: 13,
                },
                link: null
              },
              link: null,
            },
            {
              title: "+123 (568) 584 86",
              image: {
                src: "https://static-00.iconduck.com/assets.00/call-icon-2047x2048-1v137evf.png",
                alt: "phone icon",
                priority: null,
                size: {
                  type: "noFill",
                  width: 13,
                  height: 13,
                },
                link: null
              },
              link: null,
            },
          ],
          socialMedia: [
            {
              link: {
                title: null,
                url: "/facebook",
                target: "_blank",
              },
              title: null,
              image: {
                src: "https://www.iconpacks.net/icons/1/free-facebook-icon-90-thumb.png",
                alt: "facebook icon",
                priority: null,
                size: {
                  type: "noFill",
                  width: 13,
                  height: 13,
                },
                link: null
              },
            },
            {
              link: {
                title: null,
                url: "/instagram",
                target: "_blank",
              },
              title: null,
              image: {
                src: "https://img.icons8.com/?size=512&id=32320&format=png",
                alt: "instagram icon",
                priority: null,
                size: {
                  type: "noFill",
                  width: 13,
                  height: 13,
                },
                link: null
              },
            },
            {
              link: {
                title: null,
                url: "/pintrest",
                target: "_blank",
              },
              title: null,
              image: {
                src: "https://cdn-icons-png.flaticon.com/512/1051/1051329.png",
                alt: "pintrest icon",
                priority: null,
                size: {
                  type: "noFill",
                  width: 13,
                  height: 13,
                },
                link: null
              },
            },
            {
              link: {
                title: null,
                url: "/linkedIn",
                target: "_blank",
              },
              title: null,
              image: {
                src: "https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png",
                alt: "linked in icon",
                priority: null,
                size: {
                  type: "noFill",
                  width: 13,
                  height: 13,
                },
                link: null
              },
            },
          ],
          supportingImages: [
            {
              src: "https://cdn.creazilla.com/icons/3247124/chevron-thin-down-icon-lg.png",
              alt: "chevron icon",
              priority: null,
              size: {
                type: "noFill",
                width: 20,
                height: 20,
              },
              link: null
            }
          ],
        }}
      />
    </>
  );
}
