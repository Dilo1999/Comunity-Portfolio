import resumePdf from '../assets/Dilshan-Senanayaka-Resume.pdf'

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const downloadResume = async () => {
  try {
    // Fetch the PDF file
    const response = await fetch(resumePdf)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    
    // Create a link to download the PDF
    const a = document.createElement('a')
    a.href = url
    a.download = 'Dilshan-Senanayaka-Resume.pdf'
    document.body.appendChild(a)
    a.click()
    
    // Cleanup
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  } catch (error) {
    console.error('Error downloading resume:', error)
    // Fallback: open in new tab
    window.open(resumePdf, '_blank')
  }
}

