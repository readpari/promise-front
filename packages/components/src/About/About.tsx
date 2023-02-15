import * as React from "react";
import { AppLayout } from "../index";
import { useCallback } from "react";

const About: React.FC = (props) => {
  // сайдбар должен быть навигацией по сайту
  // т.е вкладки About / Bet / Read
  const renderSidebar = useCallback(() => {
    return (
      <div>
        это контент сайдбара который см такую же функцию в
        packages/components/src/Book/Book.tsx
      </div>
    );
  }, []);

  // по сути тут тебе нужно запилить отрисовку контента из bookjack
  // с описанием что это за приложение
  const renderContent = useCallback(() => {
    return (
      <div>
        Это контент страницы см такую-же функцию в
        packages/components/src/Book/Book.tsx
      </div>
    );
  }, []);

  return (
    <AppLayout
      title={"это заголовок страницы"}
      renderSidebar={renderSidebar}
      renderContent={renderContent}
    />
  );
};

export default About;
