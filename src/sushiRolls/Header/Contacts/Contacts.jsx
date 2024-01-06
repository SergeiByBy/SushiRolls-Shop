import "../header.css";

const Contacts = () => {
  return (
    <div id="contactsHeader" className="contactsHeader">
      <div className="phoneHeader">
        <a href="tel:+79956542117">8 (995) 654-21-17</a>
      </div>
      <div className="mailHeader">
        <a href="sushiskushai@yandex.ru">sushiskushai@yandex.ru</a>
      </div>
      <div className="adressHeader">г. Рязань, ул. Октябрьская, д. 33 </div>
      <div className="deliveryInfoHeader">
        <strong>Доставка 12:00 - 21:30</strong>
      </div>
    </div>
  );
};

export default Contacts;
