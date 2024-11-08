import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import MenuItemFollow from "./MenuItemFollow";
import { useEffect } from "react";
import { useUser } from "@/app/context/user";
import ClientOnly from "@/app/components/ClientOnly";
import { useGeneralStore } from "@/app/stores/general";

export default function SideNavMain() {
  let { setRandomUsers, randomUsers } = useGeneralStore();
  const contextUser = useUser();
  const pathname = usePathname();

  useEffect(() => {
    setRandomUsers();
  }, []);

  return (
    <>
      <div
        id="SideNavMain"
        className={`fixed flex justify-between bottom-0 z-20 bg-gray-200 w-full border-t`}
      >
        <div className="flex justify-around items-center align-bottom w-full mx-auto py-2">
          <Link href="/">
            <button>
              <MenuItem
                iconString="For You"
                colorString={pathname == "/" ? "#F02C56" : ""}
                sizeString="25"
              />
            </button>
          </Link>
          <button>
            <MenuItem
              iconString="Following"
              colorString="#000000"
              sizeString="25"
            />
          </button>
          <button>
            <MenuItem iconString="LIVE" colorString="#000000" sizeString="25" />
          </button>
        </div>
      </div>
    </>
  );
}
