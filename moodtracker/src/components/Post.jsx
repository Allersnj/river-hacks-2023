
function Post(props) {
  return (
    <>
      <div>
        <h3>{props.entryData.journal}</h3>
        {props.entryData.moods}
      </div>
    </>
  )
}

export default Post
