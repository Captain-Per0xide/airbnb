"use client";
import { categoryItems } from "@/app/lib/CategoryItems"
import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const MapFilterItems = () => {
    const searchParams=useSearchParams();
    const search=searchParams.get("filter");
    const pathName=usePathname();
    // const createQueryString= useCallback((name:string,value:string)=>{
    //     const params= new URLSearchParams(searchParams.toString());
    //     params.set(name,value);
    //     return params.toString();
    // },[searchParams]);
    // console.log(search);
  return (
    <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar  justify-between">
        {
            categoryItems.map((item) => {
                return (
                    <Link href={
                        pathName+"?"+"filter="+`${item.name.toLowerCase()}`
                    } key={item.id} className={
                        cn(search===item.name?"border-b-2 border-black opacity-100 pb-2 flex-shrink-0":"opacity-70 flex-shrink-0","flex flex-x-col gap-y-3 items-center")
                    }>
                        <div className="relative w-6 h-6">
                            <Image src={item.imageUrl} alt={item.title} width={24} height={24} className="w-6 h-6"/>
                        </div>
                            <p className="text-xs font-medium text-center">{item.title}</p>
                    </Link>
                );
            })
        }
    </div>
  )
}

export default MapFilterItems