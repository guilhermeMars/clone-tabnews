import Image from "next/image";
import consolacoes from "../src/Consolacoesdafilosofia.jpg"
import respostas from "../src/GrandesQuestoes.jpg"
import felicidade from "../src/porque nao e feliz.jpg"

function Home(){
    return (
        <>
        <h1>Recomendações livros Danilo</h1>
        <p>Opa amg, tudo certo? To fazendo um curso e o professor insistiu pra nós fazermos deploy de uma página que impactasse alguém de alguma forma. E como eu sou um maníaco que enrolou MT pra te mandar essas recomendações, vou fazer tudo por aqui ;)</p>
        <h2>Ludoviajante (canal yt)</h2>
        <p>Acho que não tem forma melhor de começar uma recomendação de livros com algo que NÃO É A PORRA DE UM LIVRO.<br/>Bricadeiras a parte, eu escolhi esse canal pq ele realmente é mt importante pra mim e me impactou em diversas partes da vida e, já que seu objetivo é desenvolvimento pessoal e autoconhecimento, eu não podia deixar de recomendar.<br/>Ele usa bastante filosofia, psicologia e uma pitada de piadocas funny haha pra explicar conceitos complexos e que tu realmente consegue levar pra vida.</p>
        <p>Aqui estão 3 recomendações de vídeos dele:</p>
        <ul>
            <li><a href="https://youtu.be/z9WbCnMfZms">Assista quando a vida não fizer sentido | A filosofia de Van Gogh</a></li>
            <li><a href="https://youtu.be/zg4OOqw8BoU">Carta aberta para o vazio (e pra quem se perdeu nele)</a></li>
            <li><a href="https://youtu.be/RwT-j75J6Mk">Você conhece a si mesmo? | Uma investigação filosófica</a></li>
        </ul>
        <h2>As consolações da Filosofia - Alain de Botton</h2>
        <p>Pronto, agora indo pros livros mesmo, esse é aquele que tu já me viu lendo lá na recepção ;)<br/>
        Ele é um livro com uma leitura bem gostosa e fluída. A ideia dele é apresentar diversos conceitos da filosofia (e de filósofos difetentes) pra problemas normais que nós acabamos tendo, como se importar com a opnião alheia, valorizar demais o dinheiro, se sentir inadequado e frustrado, coração quebrado...<br/>
        Enfim, ele se destaca por trazer tudo isso de uma forma muito prática e com ideias realmente muito boas pra td mundo, com vc sempre conseguindo voltar nos capítulos pra relembrar de algumas coisas. Já foi top sale e eu pra qualquer um</p>
        <Image
            src={consolacoes}
            alt="Livro Consolações"
            width="334px"
            height="708px"
        />
        <h2>Breves respostas para grandes questões - Stephen Hawking</h2>
        <p>Olha, não querendo ser direto ao ponto, mas esse foi o livro que eu me consolidei como ateu. Ele não tem esse intuíto, na verdade fala de religião com respeito e reconhece o valor dela. Porém ele apresenta um conhecimento tão brando, e de uma forma sem contas matemáticas ultra complexas. Ainda mais nesse livro, em que o foco é responder questões existenciais que todo mundo acaba tendo: Como foi a criação do Universo, existencia de Deus, se existe vida "alienígena" etc. <br/>
        Sei que não vou conseguir passar a sensação desse livro pelo meu texto, mas posso falar sem sombra de dúvidas que me inspiro no Stephen. Ele sempre acreditou na humanidade e que qualquer um pudesse aprender esses conceitos que todo mundo diz ser super complicado. E acredito que esse livro é a prova disso.</p>
        <Image
            src={respostas}
            alt="Livro Respostas"
            width="334px"
            height="708px"
        />
        <h2>Se você é tão esperto, por que não é feliz? - Raj Raghunathan</h2>
        <p>Esse eu comecei a ler no início desse ano. Lembro de ter gostado bastante da forma que o autor expressava suas ideias e ajudava legal principalmente quando tu fica muito tempo pensando demais nas coisas<br/>Sei que tu se interessou por esse livro, e posso afirmar que ele é bom, só não lembro de muitas coisas de cabeça kk</p>
        <Image
            src={felicidade}
            alt="Livro Respostas"
            width="334px"
            height="708px"
        />
        </>
    )
}

export default Home;
