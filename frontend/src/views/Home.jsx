import { useState, useEffect } from "react";
import HeartCount from "../components/HeartCount";
import HumanBody from "../components/HumanBody";
import TextBubble from "../components/TextBubble";
import VideoPlayer from "../components/VideoPlayer";

const Home = () => {
  const [count, setCount] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 0.5;
        }
        return 8;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <HeartCount count={count} />
        <div className="flex gap 4">
          <div>
            <TextBubble
              title="Cerveau"
              description="Le cerveau régule les fonctions corporelles et les réponses au stress, tandis que l'océan influence les cycles climatiques et synchronise les systèmes planétaires via des interactions avec l’atmosphère."
            />
            <TextBubble
              title="Vaisseaux"
              description="Le sang transporte l'oxygène, les nutriments et les hormones, élimine les déchets métaboliques, et les globules blancs protègent le corps contre les infections en éliminant les agents pathogènes."
            />
            <TextBubble
              title="Poumons"
              description="Les poumons assurent les échanges gazeux essentiels en absorbant l'oxygène et en éliminant le dioxyde de carbone, tandis que les phytoplanctons océaniques produisent une grande partie de l'oxygène atmosphérique et absorbent du CO₂."
            ></TextBubble>
            <TextBubble
              title="Foie"
              description="Le cerveau régule les fonctions corporelles et les réponses au stress, tandis que l'océan, en tant que régulateur global, influence les cycles climatiques et synchronise les systèmes planétaires par ses interactions avec l'atmosphère."
            />
          </div>
          <div>
            <HumanBody />
          </div>
          <div>
            <TextBubble
              title="Coeur"
              description="Le cœur régule la température interne du corps par la circulation sanguine, tandis que les courants océaniques et les échanges thermiques redistribuent la chaleur pour réguler le climat terrestre."
            />
            <TextBubble
              title="Estomac"
              description="L'estomac décompose les aliments en leurs composants essentiels, tout comme l'océan transforme les matières organiques en nutriments essentiels par la décomposition des débris marins."
            />
            <TextBubble
              title="Rein"
              description="Les reins filtrent le sang en éliminant les déchets et régulant l'équilibre hydrique, tandis que les mangroves, les récifs coralliens et certaines espèces marines filtrent l'eau des polluants et excès de nutriments."
            />
            <TextBubble
              title="Intestin"
              description="Les intestins absorbent l'eau et les nutriments des aliments digérés, tout comme les zones côtières et benthiques filtrent, recyclent les nutriments et déchets, tout en soutenant une biodiversité riche."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-8">
        <h1 className="font-bold text-3xl">Podcasts</h1>
        <VideoPlayer title="podcast 1" link="PuW5dPBYM9g"></VideoPlayer>{" "}
        <VideoPlayer title="podcast 1" link="b4-C8Rn3lwE"></VideoPlayer>
        <VideoPlayer title="podcast 1" link="TvRL5_TlZ9g"></VideoPlayer>{" "}
      </div>
    </>
  );
};

export default Home;
