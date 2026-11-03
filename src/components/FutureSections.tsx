import { Above } from './Above'
import { Campaign } from './Campaign'
import { Community } from './Community'
import { Contact } from './Contact'
import { Journey } from './Journey'
import { Projects } from './Projects'

export function FutureSections() {
  return (
    <div className="px-5 sm:px-8 lg:px-12">
      <Above />
      <Journey />
      <Projects />
      <Campaign />
      <Community />
      <Contact />
    </div>
  )
}
