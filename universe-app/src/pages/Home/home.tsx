import image from '../../assets/teste.jpg'


export function Home () {
        return (
            <div className='w-100 h-100' style={{position: 'relative'}}>
                <img className='w-100 h-100' style={{objectFit:'contain'}} src={image} alt="" />

                <div style={{position: 'absolute', top:0}}>
                    <h1>bem-vindo ao Universe!</h1>
                    <p>Olá terráquio, espero que esteja bem!</p>
                    <p>
                     Se você é apaixonado ou tem vontade de saber mais sobre
                    o espaço, vem com a gente. Aqui você pode estudar e visualizar
                    informações sobre planetas e luas.
                    </p>

                    <h4>
                    Embarque nessa jornada!
                    </h4>
                </div>
            </div>
          );
}