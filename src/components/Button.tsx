

type ButtonProps = {
  content: String;

}


export default function Button({ content }: ButtonProps) {
  return (
    <div className="bg-[#1DB559] px-4 rounded-lg p-1 font-montserrat text-[14px] font-medium">{content}</div>
  )
}
