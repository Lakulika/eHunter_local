import Storage from './base/Storage'
import Platform from '../PlatformService'

let storage = new Storage({
    size: 10,
    storageBackend: Platform.storage.local,
    defaultExpires: null,
    enableCache: true,
    sync: {}
});

export default storage;
