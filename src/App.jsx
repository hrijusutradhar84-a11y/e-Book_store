import libraryDome_1 from './assets/library-dome-2.jpg'
import scify from './assets/scyfypic.jpg'
import citynight from './assets/citynight.jpg'
import OrbitalLines from './OrbitalLines'
import Navbar from './Navbar'

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
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '95vw',
  height: '100vh',
  position: 'relative',
})

const downmask = () => ({
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0), rgba(0,0,0,0), rgba(0,0,0,0))',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  pointerEvents: 'none',
  zIndex: 2,
})

const part3bg = () => ({
  backgroundImage: `url(${citynight})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '95vw',
  height: '100vh',
  position: 'relative',
})

const part3maskR = () => ({
  backgroundImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0))',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 1,
})

const part3maskT = () => ({
  backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 1,
})

const part3textBox = () => ({
  position: 'absolute',
  top: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '600px',
  height: '200px',
  zIndex: 2,
})
export default function App() {
  return (
    <div className='bg-black bg-position-absolute'>
      <Navbar />
      {/*First part*/}
      <div style={libraryDome()}>
        <div style={blackCover1()}>
          <div style={blackCover2()}>
            <div className='w-[500px] h-[500px] top-0 left-0 translate-x-24 translate-y-24'>
              <p className="text-[#FDF6E2] text-8xl font-extrabold" style={{ fontFamily: "'Cinzel', serif" }}>
                Books to Illuminate the path
              </p>
            </div>
            <div className='bg-[#16110e]/75 w-[600px] h-[38px] top-0 left-0 translate-x-[760px] translate-y-[-400px] z-index-2 items-center'
              style={{ animation: 'slideInRight 0.6s ease-out 0.2s both' }}>
              <p className="text-[#E2C882] text-4xl font-extrabold" style={{ fontFamily: "'Cinzel', serif" }}>
                - Finance
              </p>
            </div>
            <div className='bg-[#16110e]/75 w-[600px] h-[38px] top-0 left-0 translate-x-[760px] translate-y-[-325px] z-index-2'
              style={{ animation: 'slideInRight 0.6s ease-out 0.45s both' }}>
              <p className="text-[#E2C882] text-4xl font-extrabold" style={{ fontFamily: "'Cinzel', serif" }}>
                - Stories
              </p>
            </div>
            <div className='bg-[#16110e]/75 w-[600px] h-[38px] top-0 left-0 translate-x-[760px] translate-y-[-250px] z-index-2'
              style={{ animation: 'slideInRight 0.6s ease-out 0.7s both' }}>
              <p className="text-[#E2C882] text-4xl font-extrabold" style={{ fontFamily: "'Cinzel', serif" }}>
                - business
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*second part */}

      <div style={part2bg()}>
        <OrbitalLines />
        <div style={downmask()}>
        <div style={blackCover2()}>
          <div className=' w-[400px] h-[400px] top-0 left-0 translate-x-[950px] translate-y-[100px] z-index-2'>
            <p className='text-[#95C5B5] text-6xl font-extrabold' style={{ fontFamily: "'Cinzel', serif" }}>
              Learn and Overcome your life hurdles
            </p>
          </div>

          <div className='w-[400px] h-[200px] top-0 left-0 translate-x-[100px] translate-y-[-0px] z-index-2'>
            <p className='text-[#95C5B5] text-6xl font-extrabold' style={{ fontFamily: "'Cinzel', serif" }}>
              Book that inspires
            </p>
          </div>
        </div>
        </div>
      </div>
      {/*third part */}
      <div style={part3bg()}>
        <div style={part3maskR()} />
        <div style={part3maskT()} />
        <div style={part3textBox()}>

        </div>
      </div>
    </div>
  )
}