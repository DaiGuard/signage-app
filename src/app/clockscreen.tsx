'use client'; 

import { Rubik_Mono_One } from 'next/font/google'
import { useState, useEffect } from 'react'

import styles from './ClockScreen.module.css'

const font = Rubik_Mono_One({
  weight: '400',
  subsets: ['latin'],
})

interface DateBlockProps {
  year: number;
  month: number;
  day: number;
  week: number;
}

function DateBlock({year, month, day, week}: DateBlockProps) {

  const y = ("0000" + year).slice(-4);
  const m = ("00" + month).slice(-2);
  const d = ("00" + day).slice(-2);
  const w = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"][week];

  return (
    <div className={styles.dateblock}>
      <p className={font.className}>
        {y}/{m}/{d}
      </p>
        { w == "Thu" ? (
          <p className={`${font.className} ${styles.weekend}`}>
            &nbsp;({w})
          </p>
        ) : (
          <p className={font.className}>
            &nbsp;({w})
          </p>
        )}
    </div>
  );
}

interface ClockBlockProps {
  hour: number;
  min: number;
  sec: number;
}

function ClockBlock({hour, min, sec}: ClockBlockProps) {
  const h = ("00" + hour).slice(-2);
  const m = ("00" + min).slice(-2);
  const s = ("00" + sec).slice(-2);

  return (
    <div className={styles.clockblock}>
      <p className={font.className}>
        {h}:{m}:{s}
      </p>
    </div>
  );
}


export default function ClockScreen() {    
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerid = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return() => clearInterval(timerid);
  }, [date]);

  const Y = date.getFullYear();
  const M = date.getMonth()+1;
  const D = date.getDate();
  const W = date.getDay();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();  

  return (    
    <>
      <DateBlock year={Y} month={M} day={D} week={W} />
      <ClockBlock hour={h} min={m} sec={s} />
    </>
  );  
}