import React, { useEffect, useState } from 'react';

function EffectHookDemo() {
    const [count, setCount] = useState(0);
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
    useEffect(() => {
        document.title = count
    },[count])
    // 控制useefffect 执行
    // 只有数组的每一项都不变的情况下 useEffect才不会执行
    const onsetSize = () => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }
    useEffect(() => {
        // unmount执行
        window.addEventListener('resize', onsetSize)
    }, [])
    return (
        <button onClick={() => [
            setCount(count + 1)
        ]}>
            click: {count}
            size: {size.width} X {size.height}
        </button>
    )

}
export default EffectHookDemo