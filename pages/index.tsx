import Page from '@/components/page'
import Image from 'next/image'
import Section from '@/components/section'
import profile from '@/public/images/profile.jpeg'
const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Web FrontEnd Developer <br />
				YES, React 황상한 입니다.
			</h2>

			<div className='mt-4'>
				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					현재 신세계 지마켓 WebFrontEnd에서 근무하고 있으며<br /><br />
					<span className='mt-20 font-medium  text-zinc-900 dark:text-zinc-50'>
					  Yes, Development에서는 여러분과 함께 <br />
					  WebFrontEnd 개발과 공부를 하면서 알게된 <br />
					  유용한 지식과 코드들을 공유 해보고자 합니다. 
					</span>{' '}
				</p>
				<div className='absolute top-[32%] -right-[21%] w-[72%] z-[-1] opacity-50'>
				  <Image src={profile} alt="프로필 이미지" style={{ borderRadius: '50%' }} />
				</div>
				<br />

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a
						href=''
						className='underline'
					>
					</a>
				</p>
			</div>
		</Section>
	</Page>
)

export default Index
