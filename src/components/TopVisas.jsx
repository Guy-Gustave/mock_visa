import React from "react";
import Card from "./Card";
import styles from "../styles/TopVisas.module.css";

const TopVisas = () => {
  return (
    <div>
      <section className={styles.sections} topv>
        <Card
          imageUrl="https://visalist.io/images/countries/indonesia/indonesia-9717114f.webp"
          title="Indonesia Tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/australia/australia-8b200988.webp"
          title="Australia tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/india/india-47956c7.webp"
          title='India tourist Visa"'
        />
        <Card
          imageUrl="https://visalist.io/images/countries/united-arab-emirates/united-arab-emirates-5c5cc019.webp"
          title="UAE Tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/burundi/burundi-56a6204e.webp"
          title="Burundi Tourist Visa"
        />
      </section>

      <section className={styles.sections} topv>
        <Card
          imageUrl="https://visalist.io/images/countries/indonesia/indonesia-9717114f.webp"
          title="Indonesia Tourist Visa"
          carWidth={200}
          imageHeight={200}
        />
        <Card
          imageUrl="https://visalist.io/images/countries/australia/australia-8b200988.webp"
          title="Australia tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/india/india-47956c7.webp"
          title='India tourist Visa"'
        />
        <Card
          imageUrl="https://visalist.io/images/countries/united-arab-emirates/united-arab-emirates-5c5cc019.webp"
          title="UAE Tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/burundi/burundi-56a6204e.webp"
          title="Burundi Tourist Visa"
        />
      </section>

      <section className={styles.sections} topv>
        <Card
          imageUrl="https://visalist.io/images/countries/indonesia/indonesia-9717114f.webp"
          title="Indonesia Tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/australia/australia-8b200988.webp"
          title="Australia tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/india/india-47956c7.webp"
          title='India tourist Visa"'
        />
        <Card
          imageUrl="https://visalist.io/images/countries/united-arab-emirates/united-arab-emirates-5c5cc019.webp"
          title="UAE Tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/burundi/burundi-56a6204e.webp"
          title="Burundi Tourist Visa"
        />
      </section>

      <section className={styles.sections} topv>
        <Card
          imageUrl="https://visalist.io/images/countries/indonesia/indonesia-9717114f.webp"
          title="Indonesia Tourist Visa"
          carWidth={200}
          imageHeight={200}
        />
        <Card
          imageUrl="https://visalist.io/images/countries/australia/australia-8b200988.webp"
          title="Australia tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/india/india-47956c7.webp"
          title='India tourist Visa"'
        />
        <Card
          imageUrl="https://visalist.io/images/countries/united-arab-emirates/united-arab-emirates-5c5cc019.webp"
          title="UAE Tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/countries/burundi/burundi-56a6204e.webp"
          title="Burundi Tourist Visa"
        />
      </section>

      <section className={styles.sections} >
        <Card 
          imageUrl="https://visalist.io/images/passports/DE.jpg"
          title="Indonesia Tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/passports/SE.jpg"
          title="Australia tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/passports/FI.jpg"
          title='India tourist Visa"'
        />
        <Card
          imageUrl="https://visalist.io/images/passports/NL.jpg"
          title="UAE Tourist Visa"
        />
        <Card
          imageUrl="https://visalist.io/images/passports/SG.jpg"
          title="Burundi Tourist Visa"
        />
      </section>
    </div>
  );
};

export default TopVisas;
