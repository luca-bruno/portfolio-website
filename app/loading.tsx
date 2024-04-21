import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner"
import "@/styles/loading.css"

const loading = () => (
  <div className="loading">
    <LoadingSpinner
      width={30}
      height={30}
      styles={{
        opacity: "50%",
        height: "calc(100vh - 64px)",
        alignItems: "center"
      }}
    />
  </div>
)

export default loading
