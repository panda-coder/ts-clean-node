import * as cls from 'cls-hooked'
const NameSpaceId = 'http-context'

/**
 * Gets a value from the context by key.  Will return undefined if the context has not yet been initialized for this request or if a value is not found for the specified key.
 * @param {string} key
 */
 const get = (key: string) => {
	const NameSpace = cls.getNamespace(NameSpaceId)
	if (NameSpace && NameSpace.active) {
		return NameSpace.get(key)
	}
}

/**
 * Adds a value to the context by key.  If the key already exists, its value will be overwritten.  No value will persist if the context has not yet been initialized.
 * @param {string} key 
 * @param {*} value 
 */
const set = (key: string, value: any) => {
	const NameSpace = cls.getNamespace(NameSpaceId)
	if (NameSpace && NameSpace.active) {
		return NameSpace.set(key, value)
	}
}

const context = () => {
  return cls.getNamespace(NameSpaceId) || cls.createNamespace(NameSpaceId)
}

export default {
  get,
  set,
  context
}


