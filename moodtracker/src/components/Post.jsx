
function Post(props) {
  return (
    <>
      <div>
        <h3>{props.entryData.journal}</h3>
        {props.entryData.moods}
        <br />
        {props.entryData.key.toString()}
      </div>
    </>
  )
}

export default Post
