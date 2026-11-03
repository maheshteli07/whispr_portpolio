import { Above } from './Above'
import { Campaign } from './Campaign'
import { Community } from './Community'
import { Contact } from './Contact'
import { Growth } from './Growth'
import { Journey } from './Journey'
import { Lessons } from './Lessons'
import { Projects } from './Projects'

export function FutureSections() {
  return (
    <div className="px-5 sm:px-8 lg:px-12">
      <Above />
      <Journey />
      <Projects />
      <section id="experiments" className="scroll-mt-24">
        <Campaign />
      </section>
      <Community />
      <Lessons />
      <Growth />
      <Contact />
    </div>
  )
}
