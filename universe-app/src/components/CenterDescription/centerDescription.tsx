import Earth from '../../assets/uranus.png'
export function CenterDescription() {
    return(
        <section className="d-flex justify-content-center" style={{padding:'80px', background:"#161616", flexWrap:'wrap'}}>
            <div className="w-50" style={{color:'#ffff', padding:'50px'}}>
                <h2 style={{color:'#FFAB07', fontSize:'60px'}}>The Earth</h2>
                <p style={{width:'600px', fontSize:'18px'}}>
                    Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a 
                    type specimen book. 
                </p>

                <button style={{
                width:'300px',
                height:'60px',
                background:'#FFAB07', 
                border:'none', 
                borderRadius:'20px', 
                marginTop:'32px', 
                fontSize:'20px'}}>
                    Saiba mais
                </button>
            </div>

            <div className="w-50 d-flex justify-content-center">
                <img className='w-90 h-70' src={Earth} alt="" />
            </div>
        </section>
    )
}