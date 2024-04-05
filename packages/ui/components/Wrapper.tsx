import React, { useEffect, useState } from 'react'

type Props = {}

const Wrapper = ({ children } : any) => {
  const [names, setNames] = useState<any>([])

  const addBorder = (e: any) => {
    // @ts-ignore
    const el = document?.querySelector(`#${e.target.dataset.title}`) as HTMLElement
    if(el){
      el.style.border = '2px solid red'
    }
  }

  const removeBorder = (e: any) => {
    // @ts-ignore
    const el = document?.querySelector(`#${e.target.dataset.title}`) as HTMLElement
    if(el){
      el.style.border = 'none'
    }
  }
  
  useEffect(() => {
    setNames([children.type.__docgenInfo.displayName])

    const components = document.querySelectorAll('[data-component]')

    components && components.forEach((component) => {
      setNames((prev: any) => [...prev, component.id])
    })
  }, [])

  return (
    <>
    <div>
      {names.map((name: string, index: number) => {
        return <span key={index} data-title={name} className='pr-6 cursor-pointer' onMouseEnter={addBorder} onMouseLeave={removeBorder}>nBanners/{name}</span>
      })}
    </div>
    <div id={children.type.__docgenInfo.displayName} className="">
    {children}
    </div>
    </>

  )
}

export default Wrapper