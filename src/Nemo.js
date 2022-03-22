import React from "react";

const Nemo = (props) => {
    const [count, setCount] = React.useState(3);

    console.log(count)

    const nemo_count = Array.from({ length: count }, (v, i) => i)

    const addNemo = () => {
        setCount(count + 1);
    }
    const removeNemo = () => {
        if (count > 0)
            setCount(count - 1);
        else
            window.alert('노네모')
    }

    return (
        <div>
            {nemo_count.map((v, i) => {
                return (
                    <div
                        key={i}
                        style={{
                            width: '150px',
                            height: '150px',
                            backgroundColor: '#ddd',
                            margin: '10px'
                        }}>
                        nemo
                    </div>)
            })}

            <div>
                <button onClick={addNemo}>추가인가</button>
                <button onClick={removeNemo}>빼기인가</button>
            </div>
        </div>
    );
}

export default Nemo;