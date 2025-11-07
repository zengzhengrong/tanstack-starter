const Divider = ({ text }: { text?: string }) => {
  return (
    <div className="flex h-[50px] w-full items-center justify-center border-y font-bold text-md">{text ?? text}</div>
  )
}

export { Divider }
