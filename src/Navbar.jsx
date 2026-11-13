import { useState, useRef, useEffect } from 'react'

const bar = () => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '38px',
  backgroundColor: '#000000',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '24px',
  paddingRight: '24px',
  gap: '8px',
  zIndex: 9999,
  boxSizing: 'border-box',
})

const btnWrap = () => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',
  cursor: 'pointer',
  flexShrink: 0,
})

const btnText = (hovered) => ({
  position: 'relative',
  zIndex: 1,
  color: hovered ? '#000000' : '#ffffff',
  fontSize: '1.25rem',
  fontWeight: '400',
  whiteSpace: 'nowrap',
  background: 'none',
  border: 'none',
  padding: '2px 10px',
  fontFamily: 'inherit',
  cursor: 'pointer',
  transition: 'color 0.25s ease',
  display: 'block',
})

const rippleCircle = (hovered) => ({
  position: 'absolute',
  width: '360px',
  height: '360px',
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  transform: hovered ? 'scale(1)' : 'scale(0)',
  opacity: hovered ? 1 : 0,
  transition: 'transform 0.35s ease, opacity 0.25s ease',
  pointerEvents: 'none',
})

const categoriesWrap = () => ({
  position: 'relative',
  flexShrink: 0,
})

const dropdownPanel = () => ({
  position: 'absolute',
  top: '38px',
  left: 0,
  backgroundColor: '#000000',
  minWidth: '170px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10000,
})

function NavBtn({ children, onClick }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const circleRef = useRef(null)

  const updatePos = (e) => {
    if (!circleRef.current || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    circleRef.current.style.left = `${e.clientX - rect.left - 180}px`
    circleRef.current.style.top  = `${e.clientY - rect.top  - 180}px`
  }

  const handleMouseEnter = (e) => {
    updatePos(e)
    setHovered(true)
  }

  return (
    <div ref={ref} style={btnWrap()} onMouseEnter={handleMouseEnter} onMouseMove={updatePos} onMouseLeave={() => setHovered(false)}>
      <span ref={circleRef} style={rippleCircle(hovered)} />
      <button style={btnText(hovered)} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default function Navbar() {
  const [catOpen, setCatOpen] = useState(false)
  const catRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav style={bar()}>

      {/* Categories dropdown */}
      <div ref={catRef} style={categoriesWrap()}>
        <NavBtn onClick={() => setCatOpen(o => !o)}>
          Categories ▾
        </NavBtn>
        {catOpen && (
          <div style={dropdownPanel()}>
            <NavBtn>Stories</NavBtn>
            <NavBtn>Business</NavBtn>
            <NavBtn>Finance</NavBtn>
          </div>
        )}
      </div>

      <NavBtn>Contact</NavBtn>
      <NavBtn>Privacy Policy</NavBtn>
      <NavBtn>Terms and Conditions</NavBtn>
      <NavBtn>Refund and Return Policy</NavBtn>
      <NavBtn>Disclaimer</NavBtn>
      <NavBtn>Copyright and Intellectual Property</NavBtn>

    </nav>
  )
}
