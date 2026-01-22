import './App.css'
import Button from '@bln-design-system/button'

function App() {

  return (
    <>
      <div className='flex flex-col items-center gap-y-8 bg-white'>
        <h2 className='text-center'>Bln-Design-System: PlayGround</h2>
        <div className='p-24 rounded-xl bg-gray-50 '>
          <Button className='text-sm'>Test</Button>
        </div>
      </div>
    </>
  )
}

export default App
