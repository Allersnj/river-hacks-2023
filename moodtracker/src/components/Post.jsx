
function Post(props) {
  return (
    <>
      <div>
        <h3>{props.entryData.journal}</h3>
        {props.entryData.happy ? <p>happy</p> : <p>unhappy</p>}
      </div>
    </>
  )
}

export default Post
