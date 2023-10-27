import {people} from "../../../data";

const List = () => {
  return (
    <div>{
      people.map((item)=>{
          return (<div key={item.id}>
            Hello
          </div>)
      })
  }</div>
  )
}

export default List;
