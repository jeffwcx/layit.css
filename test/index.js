const path = require('path')
const assert = require('assert')
const sass = require('node-sass')
const { expect } = require('chai')

describe('unit', () => {
  it('.unit', () => {
    const result = sass.renderSync({
      file: './test/cases/unit/unit.scss'
    }).css.toString()
    expect(result).to.include('.unit.is-1-4')
    expect(result).to.include('.unit.is-2-4')
    expect(result).to.include('.unit.is-3-4')
    expect(result).to.include('.unit.is-4-4')
    expect(result).to.include('.unit.is-1-2')
    expect(result).to.include('.unit.is-1-1')
  })
  
  it('.units-gap*', () => {
    const result = sass.renderSync({
      file: './test/cases/unit/gap.scss'
    }).css.toString()
    expect(result).to.match(/\.units-gap\s*\{\s*margin-left:\s*-5px/)
    expect(result).to.match(/\.units-gap-2\s*\{\s*margin-left:\s*-10px/)
  })

})

describe('layout', () => {
  it('prefix', () => {
    const result = sass.renderSync({
      file: './test/cases/layout/prefix.scss'
    }).css.toString()
    expect(result).to.include('.grid-row')
    expect(result).to.include('.grid-col')
  })

  it('mixin', () => {
    const result = sass.renderSync({
      file: './test/cases/layout/mixin.scss'
    }).css.toString()
    expect(result).to.match(/\.row-x\s*{\s*[\s\S]*?justify-content:\s*center;/)
    expect(result).to.match(/\.row-y\s*{\s*[\s\S]*?align-items:\s*flex-start;/)
    expect(result).to.match(/\.row-m\s*{\s*[\s\S]*?align-content:\s*flex-end;/)
    expect(result).to.match(/\.col-x\s*{\s*[\s\S]*?align-items:\s*center;/)
    expect(result).to.match(/\.col-y\s*{\s*[\s\S]*?justify-content:\s*flex-start;/)
    expect(result).to.match(/\.col-m\s*{\s*[\s\S]*?align-content:\s*flex-start;/)
  })
})