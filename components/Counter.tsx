"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

const Counter = ({name}:{name:string}) => {
  const [amount, setAmount] = useState(0);
  const increment = () => setAmount(amount + 1);
  const decrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  return (
    <div className="flex items-center gap-x-4">
    <input type="hidden" name={name} value={amount}/>
      <Button variant="outline" size="icon" type="button" onClick={decrement}>
        <Minus className="h-4 w-4 text-primary" />
      </Button>
      <p className="font-medium text-lg">{amount}</p>
      <Button onClick={increment} variant="outline" size="icon" type="button">
        <Plus className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
};

export default Counter;
