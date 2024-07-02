'use client';

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCafeOutline } from "react-icons/io5";


export function WidgetsGrid() {
  const count = useAppSelector(state => state.counter.count);
  return (
    <SimpleWidget
      title={`${count}`}
      subtitle="Coups"
      label="Counter"
      icon={<IoCafeOutline size={50} className="text-blue-500" />}
      href="/dashboard/counter"
    />
  );
}