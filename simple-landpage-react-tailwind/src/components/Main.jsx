import React from "react";

function MainContent() {
  return (
    <main className="py-10 px-20 flex-1 text-center bg-zinc-900">
      <h3 className="lg:text-2xl font-black uppercase color">
        Últimas do blog
      </h3>
      
      <div className="pt-5">
        <div className="pb-5">
          <h4 className="text-sky-600"><strong>Mosquitos no terceiro andar: o que fazer?</strong></h4>
          <p>Com certeza essa é uma pergunta feita pela maioria dos brasileiros. Afinal de contas, o mosquito é um inseto muito presente em nosso dia a dia. Os mosquitos são conhecidos pela perturbação que causam ao sono e pelo desconforto causado por suas picadas. Sem falar daquele zumbido no ouvido enquanto estamos dormindo ou da coceira interminável. <strong><em>(texto de exemplo)</em></strong></p>
        </div>

        <div className=" pb-5">
          <h6 className=" text-sky-600">Como cuidar de suas plantas:</h6>
          <p>Alguns cuidados básicos comuns a muitas plantas incluem regar regularmente, expô-las à luz solar adequada e adubá-las periodicamente, mas esses cuidados podem ir além dependendo do tipo de planta que você tem em casa. <strong><em>(texto de exemplo)</em></strong></p>
        </div>

        <div className=" pb-5">
          <h6 className=" text-sky-600">Qual a melhor forma de amarrar o sapato?</h6>
          <p>Quem diria que poderiam existir várias maneiras diferentes de fazer algo tão simples como amarrar os sapatos? Independentemente de você estar tentando ensinar uma criança ou se estiver procurando uma nova técnica para si mesmo, tudo o que você precisa é um par de mãos pacientes e seus calçados favoritos. <strong><em>(texto de exemplo)</em></strong></p>
        </div>

      </div>
    </main>
  );
}

export default MainContent;