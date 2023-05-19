function Post(props) {
  return (
    <>
      <div>
        {props.entryData.key.toString()}
        <h3>{props.entryData.journal}</h3>
        {props.entryData.moods.join(', ')}
        <br />
        <button onClick={() => props.deleteHandler(props.entryData.key)}>Delete</button>
      </div>
    </>
  )
}

export default Post
