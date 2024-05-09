import React from 'react';

const BotCard = ({ bot, onClick }) => {
  const handleClick = () => {
    onClick(bot.id);
  };

  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    </div>
  );
};

export default BotCard;
