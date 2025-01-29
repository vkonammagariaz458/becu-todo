import React from 'react';
import Image from "next/image";
import styles from "./page.module.scss";
import { TodoListComponent } from "./todo/todo-list.component";

export default function Home() {
  return (
    <div className={`${styles["todo-app"]} container`}>
      <main className={`${styles["todo-app-body"]}`}>
        <div className={`${styles["todo-header-container"]}`}>
          <h1 className={`${styles["todo-header"]}`}>Todo</h1>
        </div>
        
        <div className={`${styles["todo-main"]}`}>
          <TodoListComponent />
        </div>
      </main>

      <footer className={`${styles["todo-app-footer"]}`}>
        
      </footer>
    </div>
  );
}
