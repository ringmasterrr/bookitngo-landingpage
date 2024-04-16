import Link from 'next/link'
import Image from 'next/image'

export default function Brand({ size }) {
  return (
    <Link href={'/'}>
      <Image
        src={'/bookitngo.png'}
        alt={'brand'}
        width={137}
        height={70}
        className={`${size === 'lg' ? 'h-16' : 'h-8'} w-fit`}
      />
    </Link>
  )
}
