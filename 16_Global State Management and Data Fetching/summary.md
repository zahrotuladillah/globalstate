# Global State Management and Data Fetching
- [Global State Management](#global-state-management)
- [Redux Thunk](#redux-libraries-and-tools)
- [Menyimpan State ke Storage](#menyimpan-data-ke-storage)
- [Data Fetching](#data-fetching)

## Global State Management
### Kapan Menggunakan Redux ?
1. Banyak state yang tersebar ke banyak tempat
2. State sering berubah
3. Logic perubahan state kompleks
4. Ukuran codebase yang menengah keatasdan sedang dikerjakan oleh banyak orang
5. Perlu mengetahui bagaimana state diubah seiring waktu

### Redux Libraries and Tools
1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

### Komponen Redux
1. Actions = Memberikan informasi dari aplikasi ke store
2. Reducer = Fungsi javascript yang mengambil input berupa state saat ini dan action objek dan output state baru
3. Store = Objek sentral yang menyimpan state pada aplikasi

### Memakai dan Mengubah State 
1. Hooks = Menggunakan `useSelector` dan `useDispatch`
2. Connect = Menggunakan fungsi `mapStateToProps`, fungsi/ objek mapDispatchToProps`, fungsi `mergeProps, dan objek `options`

## Redux Thunk
Thunk Middleware memungkinkan untuk membuat action creator yang mengembalikan fungsi. Redux Thunk digunakan untuk menghandle side effect logic seperti logic sync kompleks yang perlu mengakses store dan logic async seperti request data
Cara install = `npm install redux-thunk`

## Menyimpan Data ke Storage 
Menggunakan redux persist untuk digunakan pada store. Cara install = `npm install redux-persist`

## Data Fetching
Cara-cara fetching data di react
1. Fetch API
2. Axios
3. React Query Library

**Pada fetch API, terdapat :**
- method : GET, POST, PUT, DELETE, HEAD
- URL : URL dari request
- body : body dari request
- headers : header dari objek
- dll


**Sedangkan response build dari server yang didapat adalah :**
- type - basic, cors
- url
- useFinalURL
- status - status code(200,204,etc)
- ok - bool (success status 200-299)
- statusText - status code
- headers - header dari objek


**Response method :**
- clone()
- error()
- redirect()
- arrayBuffer()
- blob()
- formData()
- json()
- text()
 
