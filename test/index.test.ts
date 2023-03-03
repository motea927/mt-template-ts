import { describe, expect, test } from 'vitest'
import { add } from '../src/index'

describe('index.ts', () => {
  // https://vitest.dev/api/#test-each
  test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('add(%i, %i) -> %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected)
  })
})
