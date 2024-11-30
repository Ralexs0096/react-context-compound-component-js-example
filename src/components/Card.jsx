import { useContext, useEffect } from 'react';
import { CardContext } from '../contexts/CardProvider';

const Card = ({ children, title, body, buttonLabelOne, buttonLabelTwo }) => {
  const { setCardData } = useContext(CardContext);

  useEffect(() => {
    setCardData({
      title,
      body,
      buttonLabelOne,
      buttonLabelTwo
    });
  }, []);

  return (
    <section
      style={{
        backgroundColor: 'violet'
      }}
    >
      {children}
    </section>
  );
};

Card.Title = () => {
  const { cardData } = useContext(CardContext);

  return <h3>{cardData.title}</h3>;
};

Card.Body = () => {
  const { cardData } = useContext(CardContext);

  return <p>{cardData.body}</p>;
};

Card.ButtonOne = () => {
  const { cardData } = useContext(CardContext);

  return <button>{cardData.buttonLabelOne}</button>;
};

Card.ButtonTwo = () => {
  const { cardData } = useContext(CardContext);

  return <button>{cardData.buttonLabelTwo}</button>;
};

export default Card;
