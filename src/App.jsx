import libraryDome_1 from './assets/library-dome-2.jpg'
import scify from './assets/scyfypic.jpg'

const libraryDome = () => ({
  backgroundImage: `url(${libraryDome_1})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100vw',
  height: '100vh',
  top: "0",
  left: "0",
  transform: "translate(-15px, 0px)"
});

const blackCover1 = () => ({
  backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
  height: "641px", 
  width: "100%", 
  position: "center", 
  zIndex: "1",
});

const blackCover2 = () => ({
  backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
  height: "641px",
  width: "100%",
  position: "center",
  zIndex: "1",
})

const part2bg = () => ({
  backgroundImage: `url(${scify})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100vw',
  height: '100vh',
  top: "0",
  left: "0",
  transform: "translate(0px, 100px)"
})

const downmask = () => ({
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))',
  width: '100vw',
  height: '100vh',
  top: "0",
  left: "0",
  transform: "translate(-15px, 100px)",
})
export default function App() {
  return (
    <div className='bg-black bg-position-absolute'>
      {/*First part*/}
      <div style={libraryDome()}>
        <div style={blackCover1()}>
        <div style={blackCover2()}>
          <div className='w-[500px] h-[500px] top-0 left-0 translate-x-24 translate-y-24'>
            <p className="text-[#FDF6E2] text-8xl font-extrabold" style={{fontFamily: "'Cinzel', serif"}}>
              Books to Illuminate the path
            </p>
          </div>
          <div className='bg-[#16110e]/75 w-[600px] h-[38px] top-0 left-0 translate-x-[760px] translate-y-[-400px] z-index-2 items-center'>
            <p className="text-[#E2C882] text-4xl font-extrabold" style={{fontFamily: "'Cinzel', serif"}}>
              - Finance
            </p>
          </div>
          <div className='bg-[#16110e]/75 w-[600px] h-[38px] top-0 left-0 translate-x-[760px] translate-y-[-325px] z-index-2'>
            <p className="text-[#E2C882] text-4xl font-extrabold" style={{fontFamily: "'Cinzel', serif"}}>
              - Stories
            </p>
          </div>
          <div className='bg-[#16110e]/75 w-[600px] h-[38px] top-0 left-0 translate-x-[760px] translate-y-[-250px] z-index-2'>
            <p className="text-[#E2C882] text-4xl font-extrabold" style={{fontFamily: "'Cinzel', serif"}}>
              - business
            </p>
          </div>
        </div>
        </div>
      </div>
      {/*second part */}

      <div style={part2bg()}>
        <div style={downmask()}>

        </div>
      </div>
    </div>
  )
}