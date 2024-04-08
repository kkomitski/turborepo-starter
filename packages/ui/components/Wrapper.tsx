import React, { useEffect, useState } from 'react'
import LinkTo from '@storybook/addon-links/react'

import Button  from '../stories/neptune/nButton.stories'

type Props = {}


const Wrapper = ({ children } : any) => {
  const [containersArr, setContainersArr] = useState<any>([])

  // Create a new div to act as the border
  const borderDiv = document.createElement('div');
  borderDiv.style.position = 'absolute';
  borderDiv.style.top = '-5px';
  borderDiv.style.right = '-5px';
  borderDiv.style.bottom = '-5px';
  borderDiv.style.left = '-5px';
  borderDiv.style.boxSizing = 'border-box';
  borderDiv.style.zIndex = "9999"

  const addBorder = (e: any) => {
    // @ts-ignore
    const el = document?.querySelector(`[data-id="${e.target.dataset.title}"]`) as HTMLElement
     if(el){
      console.log(el)
      el.style.position = "relative"
     // Set the border color based on the data-type attribute
     if(e.target.dataset.type === 'parent'){
       borderDiv.style.border = '5px solid blue';
     }
     if(e.target.dataset.type === 'sub'){
       borderDiv.style.border = '5px solid green';
     }
     if(e.target.dataset.type === 'component'){
       borderDiv.style.border = '5px solid red';
     }
 
     // Add the border div to the element
     el.appendChild(borderDiv);
    }
  }

  const removeBorder = (e: any) => {
    // @ts-ignore
    const el = document?.querySelector(`[data-id="${e.target.dataset.title}"]`) as HTMLElement
    if(el){
        // el.style.border = ''
        el.removeChild(borderDiv);
    }
  }

  useEffect(() => {
    const containers = document.querySelectorAll("[data-sub]")

    setTimeout(() => {
      Array.from(containers).forEach((container, index) => {
        // @ts-ignore
        container.dataset.id = `sub-${index}`

        const components = Array.from(container.children)
  
        setContainersArr(( prev: any ) => {
          return [ ...prev, { container, components }]
        })
      })
    }, 2000)
  }, [])
  
  return (
    <>
    <div className="sticky top-0 w-full z-50 px-10 pt-8 pb-2 bg-white">
      <div className="h-min">
        <div
          className='pr-6 cursor-pointer pb-2'
          data-type="parent"
          data-title={`${children.props.content.sys.contentType.sys.id}-${children.type.__docgenInfo.displayName}`}
          onMouseEnter={addBorder}
          onMouseLeave={removeBorder}
        >
          {children.props.content.sys.contentType.sys.id}/{children.type.__docgenInfo.displayName}
        </div>
        {
          containersArr?.length ? containersArr.map((sub: any, index: any) => {
            return (
              <div key={index} style={{ marginLeft: `${index + 1 * 10}px` }}>
                <div data-title={`sub-${index}`} data-type="sub" onMouseEnter={addBorder} onMouseLeave={removeBorder} className='cursor-pointer'>Features</div>
                <div className='flex flex-col pb-5'>
                  {sub.components && sub.components.map((component: any, index: any) => {
                    // console.log("comp", component)
                    // console.log("comp-dataset", component.dataset)
                    return <a href={`${window.location.origin }/?path=/story/neptune-${component.dataset.id && component?.dataset?.id.length ? component.dataset.id.split("_")[0].toLowerCase() : component.dataset.id.toLowerCase()}`} key={index} data-title={component.dataset.id} data-type="component" className='pr-6 cursor-pointer' onMouseEnter={addBorder} onMouseLeave={removeBorder}>- {component.dataset.id.replace("-", "/")}</a>
                  })}
                </div>
              </div>
            )
          }) : "Loading..."
        }
      </div>
    </div>

      <div className='border-4 border-solid border-black' data-id={`${children.props.content.sys.contentType.sys.id}-${children.type.__docgenInfo.displayName}`}>
        {children}
      </div>
    </>
  )
}

export default Wrapper