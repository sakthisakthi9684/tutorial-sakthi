import React from 'react'
import State from '../Hooks/state_Hooks/useState'
import Reducer from '../Hooks/state_Hooks/useReducer'
import Effect  from '../Hooks/Effect_Hooks/useEffect'
import LayoutEffect  from '../Hooks/Effect_Hooks/useLayoutEffect'
import InsertionEffect from '../Hooks/Effect_Hooks/useInsertionEffect'

function Control() {
  return (
    <div >
      <table  className='border bg-gray-200'>
    
        {/*State Hooks */}
    
        <tr>
          <th className='border border-gray-900 p-2' rowSpan={2}>State Hooks</th>
          <th className='border border-gray-900 p-2 '>useState</th>
          <th className='border border-gray-900 p-2 '>useReducer</th>
        </tr>
        <tr>
          <td className='border border-gray-900 p-2'><State/></td>
          <td className='border border-gray-900 p-2'><Reducer/></td>      
        </tr>

         {/*Ref Hooks */}
        <tr>
          <th className='border border-gray-900 p-2' rowSpan={2}>Ref Hooks</th>
          <th className='border border-gray-900 p-2'>useRef</th>
          <th className='border border-gray-900 p-2'>useImperativeHandle</th>
        </tr>
        <tr>
          
        </tr>


        {/*Effect Hooks */}
        <tr>
          <th className='border border-gray-900 p-2' rowSpan={2}>Effect Hooks</th>
          <th className='border border-gray-900 p-2'>useEffect</th>
          <th className='border border-gray-900 p-2'>useLayoutEffect</th>
          <th className='border border-gray-900 p-2'>useInsertionEffect</th>
        </tr>
        <tr>
          <td className='border border-gray-900 p-2'><Effect/></td>
          <td className='border border-gray-900 p-2'><LayoutEffect/></td>
          <td className='border border-gray-900 p-2'><InsertionEffect/></td>
        </tr>

      

        {/*Performance Hooks */}
        <tr >
          <th className='border border-gray-900 p-2' rowSpan={2}>Performance Hooks</th>
          <th className='border border-gray-900 p-2'>useMemo</th>
          <th className='border border-gray-900 p-2'>useCallback</th>
          <th className='border border-gray-900 p-2'>useTransition</th>
          <th className='border border-gray-900 p-2'>useDeferredValue</th>
          
        </tr>
        <tr>
        </tr>


        {/*Other Hooks */}
        <tr>
          <th className='border border-gray-900 p-2' rowSpan={2}>Other Hooks</th>
          <th className='border border-gray-900 p-2'>useDebugValue</th>
          <th className='border border-gray-900 p-2'>useId</th>
          <th className='border border-gray-900 p-2'>useSyncExternalStore</th>
          <th className='border border-gray-900 p-2'>useActionState</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          
        </tr>
        
       

  
      
      </table>
      
    </div>
  )
}

export default Control