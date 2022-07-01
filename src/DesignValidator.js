import { IoIosFootball, IoIosSquare } from 'react-icons/io'

export const validateColor = (text) => {
    return ['Half Time', 'In Progress'].includes(text)
        ? 'red'
        : ['Canceled', 'Finished'].includes(text)
            ? 'grey'
            : 'green';
}

export const validateTimeLabel = (text) => {
    return text === 'Half Time'
        ? 'HT'
        : text === 'Finished'
            ? 'FT'
            : ['Canceled', 'In Progress', '']
                .includes(text)
                ? text
                : `${text}'`
}

export const validateMiniEvent = (type) => {
    return type === 'goal'
        ? <IoIosFootball className='green' />
        : type === 'yellow card'
            ? <IoIosSquare className='yellow' />
            : <IoIosSquare className='red' />
}

export const validateMiniEventResult = (miniEvent) => {
    return miniEvent.type === 'goal'
        ? <span className="dsl-res">{miniEvent.result}</span>
        : ''
}