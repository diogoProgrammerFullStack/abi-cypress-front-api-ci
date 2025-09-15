import { faker } from '@faker-js/faker'

class TestHelper {
  static uniqueEmail(prefix = 'diogo.qa', domain = 'iba.com') {
    const rand = faker.string.alphanumeric({ length: 6 }).toLowerCase()
    return `${prefix}+${Date.now()}-${rand}@${domain}`
  }

  static prefixedName(prefix = 'Diogo QA') {
    return `${prefix} - ${faker.person.firstName()} ${faker.person.lastName()}`
  }

  static strongPassword({ length = 12 } = {}) {
    const upper = faker.string.alpha({ length: 1, casing: 'upper' })
    const lower = faker.string.alpha({ length: 1, casing: 'lower' })
    const digit = String(faker.number.int({ min: 0, max: 9 }))
    const symbol = faker.helpers.arrayElement(['@', '#', '!', '$', '%', '&', '*'])

    const remaining = faker.string.alphanumeric({ length: Math.max(0, length - 4), casing: 'mixed' })
    const chars = [upper, lower, digit, symbol, ...remaining.split('')]

    return chars.sort(() => 0.5 - Math.random()).join('')
  }

  static basicData(overrides = {}) {
    return {
      name: this.prefixedName('Diogo QA'),
      email: this.uniqueEmail(),
      password: this.strongPassword({ length: 12 }),
      admin: true,
      ...overrides
    }
  }

  static dataProduct() {
    return {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        quantity: faker.number.int({min: 1, max: 100})
    }
  }
}

export default TestHelper
